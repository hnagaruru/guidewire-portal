package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPModifier.eti;CPModifier.eix;CPModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPModifierInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the CPRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPRateFactors(entity.CPRateFactor element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPModifier getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CPLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyLine getCPLine();
  
  
  public gw.pl.persistence.core.Key getCPLineID();
  
  
  /**
   * Gets the value of the CPRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPRateFactor[] getCPRateFactors();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPModifier getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CPModifier getSubtype();
  
  
  /**
   * Removes the given element from the CPRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromCPRateFactors(entity.CPRateFactor element);
  
  
  /**
   * Removes the given element from the CPRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.CPModifier value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CPLine field.
   */
  public void setCPLine(entity.CommercialPropertyLine value);
  
  
  public void setCPLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CPRateFactors field.
   */
  public void setCPRateFactors(entity.CPRateFactor[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.CPModifier value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.CPModifier value);
  
  
  
}