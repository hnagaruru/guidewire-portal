package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingAccountContactRoleUpdate.eti;PendingAccountContactRoleUpdate.eix;PendingAccountContactRoleUpdate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingAccountContactRoleUpdateInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.PendingUpdateDelegateInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.domain.account.PendingUpdate {
  /**
   * Gets the value of the RelationshipTitle field.
   * The relationship for an OwnerOfficer.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Relationship getRelationshipTitle();
  
  
  /**
   * Gets the value of the TargetAccountContactRole field.
   * The account contact to write these values to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContactRole getTargetAccountContactRole();
  
  
  public gw.pl.persistence.core.Key getTargetAccountContactRoleID();
  
  
  /**
   * Gets the value of the RelationshipTitleIsNull field.
   * True if the RelationshipTitle field should be set to null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRelationshipTitleIsNull();
  
  
  /**
   * Sets the value of the RelationshipTitle field.
   */
  public void setRelationshipTitle(typekey.Relationship value);
  
  
  /**
   * Sets the value of the RelationshipTitleIsNull field.
   */
  public void setRelationshipTitleIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the TargetAccountContactRole field.
   */
  public void setTargetAccountContactRole(entity.AccountContactRole value);
  
  
  public void setTargetAccountContactRoleID(gw.pl.persistence.core.Key value);
  
  
  
}