# Address Book

You have been hired to develop online address book. Below are the feature requirements

* The address book will display the name, phone number and address for each person in the H2 database. You will need to create a SpringBoot application to support the backend and an Angular frontend to display the information.

## Starter Project
We have provided a start project for each exercise that builds on each other to complete your application

## Requirements
For exercise 4 you will be creating a single class. The class `SpringSecurityConfig` will enable and customize Spring Security for the application.
### Spring Security Config

* Create a new package security
* Create a new class named `SpringSecurityConfig` that extends  `WebSecurityConfigurerAdapter`
* Add the following annotations directly above the class name

`@Configuration` - Identifies the class as configuration


`@EnableWebSecurity` - Enables web security

* Add the configure method. This method enables authentication and HTTP basic for all HTTp methods and requests. 


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().
                disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

