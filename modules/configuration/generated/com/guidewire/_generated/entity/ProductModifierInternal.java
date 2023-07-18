package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProductModifier.eti;ProductModifier.eix;ProductModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProductModifierInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the ProductRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProductRateFactors(entity.ProductRateFactor element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProductModifier getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the EffectiveDatedFields field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EffectiveDatedFields getEffectiveDatedFields();
  
  
  public gw.pl.persistence.core.Key getEffectiveDatedFieldsID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProductModifier getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ProductRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProductRateFactor[] getProductRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProductModifier getSubtype();
  
  
  /**
   * Removes the given element from the ProductRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromProductRateFactors(entity.ProductRateFactor element);
  
  
  /**
   * Removes the given element from the ProductRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProductRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.ProductModifier value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EffectiveDatedFields field.
   */
  public void setEffectiveDatedFields(entity.EffectiveDatedFields value);
  
  
  public void setEffectiveDatedFieldsID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.ProductModifier value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProductRateFactors field.
   */
  public void setProductRateFactors(entity.ProductRateFactor[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ProductModifier value);
  
  
  
}