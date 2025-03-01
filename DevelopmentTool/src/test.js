function oajs_next_previous_record(a_flag, a_main_frame, a_associate_frame,a_linked_frame) {
    var currslno = get_item_value(`${a_main_frame}.slno`, 'current_record');
    var bodyslno = 0, associateslno = 0;
    var l_mode=get_item_value(':p_mode','current_record');
    if (a_flag.toLowerCase() == 'next') {
        bodyslno = max(`${a_main_frame}.slno`);
    } else if (a_flag.toLowerCase() == 'previous') {
        bodyslno = min(`${a_main_frame}.slno`);
    }
    if (currslno && bodyslno) {
        if (currslno == bodyslno) {
            if (a_flag.toLowerCase() == 'previous') {
                alert('You are currently on the first record. Proceed to the next step when ready.','raise');
            } else if (a_flag.toLowerCase() == 'next') {
            if (['A', 'E', 'AM', 'CR'].includes(l_mode)) {
               app_execute_item('pb_add_record','click_events_str'); } else { 
               alert('You are currently on the last record. Proceed to the next step when ready.','raise'); }
            }
        } else {
            if (a_flag.toLowerCase() == 'next') {
                currslno += 1;
            } else if (a_flag.toLowerCase() == 'previous') {
                currslno -= 1;
            }
            for (var i = 0; i < count(`${a_associate_frame}.slno`); i++) {
                associateslno = get_item_value(`${a_associate_frame}.slno`, i);
                if (currslno == associateslno) {
                if (a_flag.toLowerCase() == 'next') {
                    app_execute_item('pb_add_record','click_events_str'); }
                    app_clear_frame(a_main_frame);
                    app_edit_record(a_main_frame, a_associate_frame, null, i);
                if (a_linked_frame) {
                        let l_num_frame=a_linked_frame.split('#');
                        for (key of l_num_frame) {
                            let l_additional_frame=key.split('~');
                            app_clear_frame(l_additional_frame[0]);
                            app_edit_record(l_additional_frame[0], l_additional_frame[1], l_additional_frame[1]+'.slno=:'+a_main_frame+'.slno');
                        }
                }
                }
            }

        }
    }
}
