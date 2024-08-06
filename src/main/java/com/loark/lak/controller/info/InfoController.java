package com.loark.lak.controller.info;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class InfoController {
    private static final Logger logger = LoggerFactory.getLogger(InfoController.class);

    @Value("${lostark-api-key}")
    private String lostark_key;

    @GetMapping("/getKey")
    public String getKey() {
        return lostark_key;
    }

//    @GetMapping("/characterInfo")
//    @ResponseBody
//    public ResponseEntity<Object> getCharacterInfo(){
//
//        return
//    }
}
