package com.guidewire._generated.security;

import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class ProducerCodePermKeys {
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.ProducerCode.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("prodcodecreate").withDescription("Permission to create a producer code.").build());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(CREATE);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}