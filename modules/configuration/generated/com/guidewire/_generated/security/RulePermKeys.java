package com.guidewire._generated.security;

import com.guidewire.bizrules.domain.security.ApproveRulePermissionHandler;
import com.guidewire.bizrules.domain.security.CreateRulePermissionHandler;
import com.guidewire.bizrules.domain.security.DeployRulePermissionHandler;
import com.guidewire.bizrules.domain.security.EditRulePermissionHandler;
import com.guidewire.bizrules.domain.security.ImportRulePermissionHandler;
import com.guidewire.bizrules.domain.security.ViewRulePermissionHandler;
import com.guidewire.pl.system.security.OptionalObjectPermissionKey;
import com.guidewire.pl.system.security.PermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class RulePermKeys {
  public static final OptionalObjectPermissionKey VIEW = new OptionalObjectPermissionKey("view", entity.Rule.class.getSimpleName(), new ViewRulePermissionHandler());
  
  public static final OptionalObjectPermissionKey EDIT = new OptionalObjectPermissionKey("edit", entity.Rule.class.getSimpleName(), new EditRulePermissionHandler());
  
  public static final OptionalObjectPermissionKey CREATE = new OptionalObjectPermissionKey("create", entity.Rule.class.getSimpleName(), new CreateRulePermissionHandler());
  
  public static final OptionalObjectPermissionKey DELETE = new OptionalObjectPermissionKey("delete", entity.Rule.class.getSimpleName(), new EditRulePermissionHandler());
  
  public static final OptionalObjectPermissionKey DEPLOY = new OptionalObjectPermissionKey("deploy", entity.Rule.class.getSimpleName(), new DeployRulePermissionHandler());
  
  public static final OptionalObjectPermissionKey IMPORT = new OptionalObjectPermissionKey("import", entity.Rule.class.getSimpleName(), new ImportRulePermissionHandler());
  
  public static final OptionalObjectPermissionKey APPROVE = new OptionalObjectPermissionKey("approve", entity.Rule.class.getSimpleName(), new ApproveRulePermissionHandler());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(EDIT);
    permissionKeys.add(CREATE);
    permissionKeys.add(DELETE);
    permissionKeys.add(DEPLOY);
    permissionKeys.add(IMPORT);
    permissionKeys.add(APPROVE);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}