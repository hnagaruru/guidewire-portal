package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EffectiveDatedFields.eti;EffectiveDatedFields.eix;EffectiveDatedFields.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface EffectiveDatedFieldsInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.ModifiableAdapter, gw.pc.policy.period.entity.EffectiveDatedFieldsPublicMethods {
  /**
   * Adds the given element to the ProductModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProductModifiers(entity.ProductModifier element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EffectiveDatedFields getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BillingContact field.
   * The billing contact on the policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyBillingContact getBillingContact();
  
  
  public gw.pl.persistence.core.Key getBillingContactID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EffectiveDatedFields getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the OfferingCode field.
   * The product offering selected for this branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOfferingCode();
  
  
  /**
   * Gets the value of the PolicyAddress field.
   * The Policy Address of this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddress getPolicyAddress();
  
  
  public gw.pl.persistence.core.Key getPolicyAddressID();
  
  
  /**
   * Gets the value of the PrimaryLocation field.
   * The primary Location for this Policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPrimaryLocation();
  
  
  public gw.pl.persistence.core.Key getPrimaryLocationID();
  
  
  /**
   * Gets the value of the PrimaryNamedInsured field.
   * The primary named insured on the policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPriNamedInsured getPrimaryNamedInsured();
  
  
  public gw.pl.persistence.core.Key getPrimaryNamedInsuredID();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The producer code of the producer that was managing this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  /**
   * Gets the value of the ProductModifiers field.
   * Rating info for the policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProductModifier[] getProductModifiers();
  
  
  /**
   * Gets the value of the SecondaryNamedInsured field.
   * The secondary named insured on the policy.  This typically only exists on personal lines.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicySecNamedInsured getSecondaryNamedInsured();
  
  
  public gw.pl.persistence.core.Key getSecondaryNamedInsuredID();
  
  
  /**
   * Removes the given element from the ProductModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromProductModifiers(entity.ProductModifier element);
  
  
  /**
   * Removes the given element from the ProductModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProductModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.EffectiveDatedFields value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BillingContact field.
   */
  public void setBillingContact(entity.PolicyBillingContact value);
  
  
  public void setBillingContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.EffectiveDatedFields value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OfferingCode field.
   */
  public void setOfferingCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyAddress field.
   */
  public void setPolicyAddress(entity.PolicyAddress value);
  
  
  public void setPolicyAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrimaryLocation field.
   */
  public void setPrimaryLocation(entity.PolicyLocation value);
  
  
  public void setPrimaryLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrimaryNamedInsured field.
   */
  public void setPrimaryNamedInsured(entity.PolicyPriNamedInsured value);
  
  
  public void setPrimaryNamedInsuredID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(entity.ProducerCode value);
  
  
  public void setProducerCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProductModifiers field.
   */
  public void setProductModifiers(entity.ProductModifier[] value);
  
  
  /**
   * Sets the value of the SecondaryNamedInsured field.
   */
  public void setSecondaryNamedInsured(entity.PolicySecNamedInsured value);
  
  
  public void setSecondaryNamedInsuredID(gw.pl.persistence.core.Key value);
  
  
  
}