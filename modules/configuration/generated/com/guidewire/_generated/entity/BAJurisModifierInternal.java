package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisModifier.eti;BAJurisModifier.eix;BAJurisModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BAJurisModifierInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the BAJurisRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBAJurisRateFactors(entity.BAJurisRateFactor element);
  
  
  /**
   * Gets the value of the BAJurisRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisRateFactor[] getBAJurisRateFactors();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisModifier getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
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
  public entity.BAJurisModifier getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The jurisdiction for which this modifier applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction getJurisdiction();
  
  
  public gw.pl.persistence.core.Key getJurisdictionID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BAJurisModifier getSubtype();
  
  
  /**
   * Removes the given element from the BAJurisRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromBAJurisRateFactors(entity.BAJurisRateFactor element);
  
  
  /**
   * Removes the given element from the BAJurisRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBAJurisRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BAJurisRateFactors field.
   */
  public void setBAJurisRateFactors(entity.BAJurisRateFactor[] value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BAJurisModifier value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BAJurisModifier value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(entity.BAJurisdiction value);
  
  
  public void setJurisdictionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.BAJurisModifier value);
  
  
  
}