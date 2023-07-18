package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyUserRoleAssignment.eti;PolicyUserRoleAssignment.eix;PolicyUserRoleAssignment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyUserRoleAssignmentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.UserRoleAssignmentInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYUSERROLEASSIGNMENTADDED_EVENT = "PolicyUserRoleAssignmentAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYUSERROLEASSIGNMENTCHANGED_EVENT = "PolicyUserRoleAssignmentChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYUSERROLEASSIGNMENTREMOVED_EVENT = "PolicyUserRoleAssignmentRemoved";
  
  /**
   * Gets the value of the Policy field.
   * Associated policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  
}