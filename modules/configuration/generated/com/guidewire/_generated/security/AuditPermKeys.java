package com.guidewire._generated.security;

import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class AuditPermKeys {
  public static final StaticPermissionKey VIEW = new StaticPermissionKey("view", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("viewaudit").withDescription("Permission to view audits").build());
  
  public static final StaticPermissionKey COMPLETE = new StaticPermissionKey("complete", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("completeaudit").withDescription("Permission to complete audits").build());
  
  public static final StaticPermissionKey EDIT = new StaticPermissionKey("edit", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("editaudit").withDescription("Permission to edit audits").build());
  
  public static final StaticPermissionKey ADVANCE = new StaticPermissionKey("advance", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("advanceaudit").withDescription("Permission to advance audits").build());
  
  public static final StaticPermissionKey QUOTE = new StaticPermissionKey("quote", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("quote").withDescription("Permission to quote audits").build());
  
  public static final StaticPermissionKey WAIVE = new StaticPermissionKey("waive", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("waiveaudit").withDescription("Permission to waive an audit").build());
  
  public static final StaticPermissionKey REVISE = new StaticPermissionKey("revise", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("reviseaudit").withDescription("Permission to revise an audit").build());
  
  public static final StaticPermissionKey RESCHEDULE = new StaticPermissionKey("reschedule", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("rescheduleaudit").withDescription("Permission to change the dates of an audit").build());
  
  public static final StaticPermissionKey START = new StaticPermissionKey("start", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("startaudit").withDescription("Permission to start an audit job").build());
  
  public static final StaticPermissionKey WITHDRAW = new StaticPermissionKey("withdraw", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("withdraw").withDescription("Permission to withdraw an audit").build());
  
  public static final StaticPermissionKey REVERSE = new StaticPermissionKey("reverse", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("reverseaudit").withDescription("Permission to manually reverse an audit").build());
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Audit.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("createaudit").withDescription("Permission to create an ad-hoc audit").build());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(COMPLETE);
    permissionKeys.add(EDIT);
    permissionKeys.add(ADVANCE);
    permissionKeys.add(QUOTE);
    permissionKeys.add(WAIVE);
    permissionKeys.add(REVISE);
    permissionKeys.add(RESCHEDULE);
    permissionKeys.add(START);
    permissionKeys.add(WITHDRAW);
    permissionKeys.add(REVERSE);
    permissionKeys.add(CREATE);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}