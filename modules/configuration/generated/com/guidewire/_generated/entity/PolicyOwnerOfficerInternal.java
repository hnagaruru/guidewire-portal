package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyOwnerOfficer.eti;PolicyOwnerOfficer.eix;PolicyOwnerOfficer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyOwnerOfficerInternal extends com.guidewire._generated.entity.WCPolicyContactRoleInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.AccountSyncable {
  /**
   * Gets the value of the ClassCode field.
   * Class Code of this contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode getClassCode();
  
  
  public gw.pl.persistence.core.Key getClassCodeID();
  
  
  /**
   * Gets the value of the Included field.
   * Is this contact included in this policy?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Inclusion getIncluded();
  
  
  /**
   * Gets the value of the OwnershipPct field.
   * Ownership percentage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOwnershipPct();
  
  
  /**
   * Gets the value of the RelationshipTitleInternal field.
   * The relationship
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Relationship getRelationshipTitleInternal();
  
  
  /**
   * Gets the value of the State field.
   * The state in which this contact is definied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Sets the value of the ClassCode field.
   */
  public void setClassCode(entity.WCClassCode value);
  
  
  public void setClassCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Included field.
   */
  public void setIncluded(typekey.Inclusion value);
  
  
  /**
   * Sets the value of the OwnershipPct field.
   */
  public void setOwnershipPct(java.lang.Integer value);
  
  
  /**
   * Sets the value of the RelationshipTitleInternal field.
   */
  public void setRelationshipTitleInternal(typekey.Relationship value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  
}