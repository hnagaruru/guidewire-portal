package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountUserRoleAssignment.eti;AccountUserRoleAssignment.eix;AccountUserRoleAssignment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountUserRoleAssignmentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.UserRoleAssignmentInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTUSERROLEASSIGNMENTADDED_EVENT = "AccountUserRoleAssignmentAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTUSERROLEASSIGNMENTCHANGED_EVENT = "AccountUserRoleAssignmentChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTUSERROLEASSIGNMENTREMOVED_EVENT = "AccountUserRoleAssignmentRemoved";
  
  /**
   * Gets the value of the Account field.
   * Associated account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  
}