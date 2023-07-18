package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWReferralReason.eti;UWReferralReason.eix;UWReferralReason.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWReferralReasonInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.UWIssueDelegateInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Adds the given element to the LongDescription_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLongDescription_L10N_ARRAY(entity.UWReferralReason_LongDescription_L10N element);
  
  
  /**
   * Adds the given element to the ShortDescription_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToShortDescription_L10N_ARRAY(entity.UWReferralReason_ShortDescription_L10N element);
  
  
  /**
   * Gets the value of the LongDescription field.
   * The long description of this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLongDescription();
  
  
  /**
   * Gets the value of the LongDescription_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWReferralReason_LongDescription_L10N[] getLongDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition LongDescription_L10N_ARRAYByLanguage on array LongDescription_L10N_ARRAY
   */
  public entity.UWReferralReason_LongDescription_L10N getLongDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Policy field.
   * The policy for which this referral reason applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the ShortDescription field.
   * The short description of this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getShortDescription();
  
  
  /**
   * Gets the value of the ShortDescription_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWReferralReason_ShortDescription_L10N[] getShortDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition ShortDescription_L10N_ARRAYByLanguage on array ShortDescription_L10N_ARRAY
   */
  public entity.UWReferralReason_ShortDescription_L10N getShortDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Status field.
   * Whether this referral reason is open or closed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWReferralReasonStatus getStatus();
  
  
  /**
   * Removes the given element from the LongDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromLongDescription_L10N_ARRAY(entity.UWReferralReason_LongDescription_L10N element);
  
  
  /**
   * Removes the given element from the LongDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLongDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ShortDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromShortDescription_L10N_ARRAY(entity.UWReferralReason_ShortDescription_L10N element);
  
  
  /**
   * Removes the given element from the ShortDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromShortDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the LongDescription field.
   */
  public void setLongDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the LongDescription_L10N_ARRAY field.
   */
  public void setLongDescription_L10N_ARRAY(entity.UWReferralReason_LongDescription_L10N[] value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ShortDescription field.
   */
  public void setShortDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the ShortDescription_L10N_ARRAY field.
   */
  public void setShortDescription_L10N_ARRAY(entity.UWReferralReason_ShortDescription_L10N[] value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.UWReferralReasonStatus value);
  
  
  
}