package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisdiction.eti;BAJurisdiction.eix;BAJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BAJurisdictionInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.effdate.UniqueOnPolicyPeriod, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the BAJurisModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBAJurisModifiers(entity.BAJurisModifier element);
  
  
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.BAStateCond element);
  
  
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.BAJurisdictionCost element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.BAStateCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.BAStateExcl element);
  
  
  /**
   * Adds the given element to the HiredAutoBasisArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHiredAutoBasisArray(entity.BAHiredAutoBasis element);
  
  
  /**
   * Adds the given element to the NonOwnedBasisArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNonOwnedBasisArray(entity.BANonOwnedBasis element);
  
  
  /**
   * Gets the value of the BAJurisModifiers field.
   * Rating info for the line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisModifier[] getBAJurisModifiers();
  
  
  /**
   * Gets the value of the BALine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBALine();
  
  
  public gw.pl.persistence.core.Key getBALineID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Conditions field.
   * All Conditions on this State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAStateCond[] getConditions();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdictionCost[] getCosts();
  
  
  /**
   * Gets the value of the Coverages field.
   * All Coverages on this State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAStateCov[] getCoverages();
  
  
  /**
   * Gets the value of the Exclusions field.
   * All Exclusions on this State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAStateExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HiredAutoBasis field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAHiredAutoBasis getHiredAutoBasis();
  
  
  /**
   * Gets the value of the HiredAutoBasisArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAHiredAutoBasis[] getHiredAutoBasisArray();
  
  
  public gw.pl.persistence.core.Key getHiredAutoBasisID();
  
  
  /**
   * Gets the value of the NonOwnedBasis field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BANonOwnedBasis getNonOwnedBasis();
  
  
  /**
   * Gets the value of the NonOwnedBasisArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BANonOwnedBasis[] getNonOwnedBasisArray();
  
  
  public gw.pl.persistence.core.Key getNonOwnedBasisID();
  
  
  /**
   * Gets the value of the State field.
   * The jurisdiction that is covered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Removes the given element from the BAJurisModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromBAJurisModifiers(entity.BAJurisModifier element);
  
  
  /**
   * Removes the given element from the BAJurisModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBAJurisModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.BAStateCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.BAJurisdictionCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.BAStateCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.BAStateExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HiredAutoBasisArray array. This is achieved by marking the element for removal.
   */
  public void removeFromHiredAutoBasisArray(entity.BAHiredAutoBasis element);
  
  
  /**
   * Removes the given element from the HiredAutoBasisArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHiredAutoBasisArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the NonOwnedBasisArray array. This is achieved by marking the element for removal.
   */
  public void removeFromNonOwnedBasisArray(entity.BANonOwnedBasis element);
  
  
  /**
   * Removes the given element from the NonOwnedBasisArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNonOwnedBasisArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BAJurisModifiers field.
   */
  public void setBAJurisModifiers(entity.BAJurisModifier[] value);
  
  
  /**
   * Sets the value of the BALine field.
   */
  public void setBALine(entity.BusinessAutoLine value);
  
  
  public void setBALineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BAJurisdiction value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.BAStateCond[] value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.BAJurisdictionCost[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.BAStateCov[] value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.BAStateExcl[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BAJurisdiction value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HiredAutoBasis field.
   */
  public void setHiredAutoBasis(entity.BAHiredAutoBasis value);
  
  
  /**
   * Sets the value of the HiredAutoBasisArray field.
   */
  public void setHiredAutoBasisArray(entity.BAHiredAutoBasis[] value);
  
  
  public void setHiredAutoBasisID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NonOwnedBasis field.
   */
  public void setNonOwnedBasis(entity.BANonOwnedBasis value);
  
  
  /**
   * Sets the value of the NonOwnedBasisArray field.
   */
  public void setNonOwnedBasisArray(entity.BANonOwnedBasis[] value);
  
  
  public void setNonOwnedBasisID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  
}