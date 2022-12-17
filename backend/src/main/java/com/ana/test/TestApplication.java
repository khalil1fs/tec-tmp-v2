package com.ana.test;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class TestApplication {

    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx = SpringApplication.run(TestApplication.class, args);
    }

    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }


    @Bean
    public CommandLineRunner init() {

        return (args) -> {
            if (true) {

            }
        };
    }

}
