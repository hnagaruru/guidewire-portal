package com.guidewire._generated.security;

import com.guidewire.pl.system.security.PermissionKey;
import gw.entity.IEntityType;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class PermKeyAccess {
  public static Map<IEntityType,List<PermissionKey>> getAllPermissionKeys() {
    Map<IEntityType,List<PermissionKey>> allPermissionKeys = new HashMap<>();
    allPermissionKeys.put(entity.Account.TYPE.get(), AccountPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Activity.TYPE.get(), ActivityPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.ActivityPattern.TYPE.get(), ActivityPatternPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Attribute.TYPE.get(), AttributePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.AttributeUser.TYPE.get(), AttributeUserPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Audit.TYPE.get(), AuditPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.BusinessWeek.TYPE.get(), BusinessWeekPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Cancellation.TYPE.get(), CancellationPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Contact.TYPE.get(), ContactPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Credential.TYPE.get(), CredentialPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Document.TYPE.get(), DocumentPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Group.TYPE.get(), GroupPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.GroupRegion.TYPE.get(), GroupRegionPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.GroupUser.TYPE.get(), GroupUserPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Holiday.TYPE.get(), HolidayPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Issuance.TYPE.get(), IssuancePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Job.TYPE.get(), JobPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Note.TYPE.get(), NotePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Organization.TYPE.get(), OrganizationPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.PolicyChange.TYPE.get(), PolicyChangePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.PolicyPeriod.TYPE.get(), PolicyPeriodPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.ProducerCode.TYPE.get(), ProducerCodePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Region.TYPE.get(), RegionPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Reinstatement.TYPE.get(), ReinstatementPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Renewal.TYPE.get(), RenewalPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Rewrite.TYPE.get(), RewritePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.RewriteNewAccount.TYPE.get(), RewriteNewAccountPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Role.TYPE.get(), RolePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.RolePrivilege.TYPE.get(), RolePrivilegePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Rule.TYPE.get(), RulePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.ScriptParameter.TYPE.get(), ScriptParameterPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.SecurityZone.TYPE.get(), SecurityZonePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Submission.TYPE.get(), SubmissionPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.User.TYPE.get(), UserPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.UserRole.TYPE.get(), UserRolePermKeys.getPermissionKeys());
    return java.util.Collections.unmodifiableMap(allPermissionKeys);
  }
  
  
}