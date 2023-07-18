package com.guidewire._generated.security;

import com.guidewire.pc.domain.community.impl.OrganizationDeletePermissionHandler;
import com.guidewire.pc.domain.community.impl.OrganizationEditAgencyPermissionHandler;
import com.guidewire.pc.domain.community.impl.OrganizationEditBasicPermissionHandler;
import com.guidewire.pc.domain.community.impl.OrganizationEditPermissionHandler;
import com.guidewire.pl.system.security.ObjectPermissionKey;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class OrganizationPermKeys {
  public static final ObjectPermissionKey DELETE = new ObjectPermissionKey("delete", entity.Organization.class.getSimpleName(), new OrganizationDeletePermissionHandler());
  
  public static final ObjectPermissionKey EDIT = new ObjectPermissionKey("edit", entity.Organization.class.getSimpleName(), new OrganizationEditPermissionHandler());
  
  public static final ObjectPermissionKey EDITAGENCY = new ObjectPermissionKey("editagency", entity.Organization.class.getSimpleName(), new OrganizationEditAgencyPermissionHandler());
  
  public static final ObjectPermissionKey EDITBASIC = new ObjectPermissionKey("editbasic", entity.Organization.class.getSimpleName(), new OrganizationEditBasicPermissionHandler());
  
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Organization.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("orgcreate").withDescription("Permission to create an organization").build());
  
  public static final StaticPermissionKey SEARCH = new StaticPermissionKey("search", entity.Organization.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("orgsearch").withDescription("Permission to search for organizations").build());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(DELETE);
    permissionKeys.add(EDIT);
    permissionKeys.add(EDITAGENCY);
    permissionKeys.add(EDITBASIC);
    permissionKeys.add(CREATE);
    permissionKeys.add(SEARCH);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}