package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBuilding.eti;BOPBuilding.eix;BOPBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPBuildingInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.contact.AdditionalInterestContainer, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificBuilding, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterests(entity.BOPBldgAddlInterest element);
  
  
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.BOPCovBuildingCost element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.BOPBuildingCov element);
  
  
  /**
   * Gets the value of the AdditionalInterests field.
   * Additional interests on this building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBldgAddlInterest[] getAdditionalInterests();
  
  
  /**
   * Gets the value of the BOPLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocation getBOPLocation();
  
  
  public gw.pl.persistence.core.Key getBOPLocationID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBuilding getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BasisAmount field.
   * Basis Amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBasisAmount();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Building field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building getBuilding();
  
  
  public gw.pl.persistence.core.Key getBuildingID();
  
  
  /**
   * Gets the value of the ClassCode field.
   * Class code of building.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPClassCode getClassCode();
  
  
  public gw.pl.persistence.core.Key getClassCodeID();
  
  
  /**
   * Gets the value of the ConstructionType field.
   * Type of building construction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BOPConstructionType getConstructionType();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCovBuildingCost[] getCosts();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this building.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBuildingCov[] getCoverages();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBuilding getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the NumDiving field.
   * Number of diving boards
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DivingBoards getNumDiving();
  
  
  /**
   * Gets the value of the NumPools field.
   * Number of swimming pools
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SwimmingPools getNumPools();
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterests(entity.BOPBldgAddlInterest element);
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.BOPCovBuildingCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.BOPBuildingCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInterests field.
   */
  public void setAdditionalInterests(entity.BOPBldgAddlInterest[] value);
  
  
  /**
   * Sets the value of the BOPLocation field.
   */
  public void setBOPLocation(entity.BOPLocation value);
  
  
  public void setBOPLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BOPBuilding value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasisAmount field.
   */
  public void setBasisAmount(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Building field.
   */
  public void setBuilding(entity.Building value);
  
  
  public void setBuildingID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ClassCode field.
   */
  public void setClassCode(entity.BOPClassCode value);
  
  
  public void setClassCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ConstructionType field.
   */
  public void setConstructionType(typekey.BOPConstructionType value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.BOPCovBuildingCost[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.BOPBuildingCov[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BOPBuilding value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NumDiving field.
   */
  public void setNumDiving(typekey.DivingBoards value);
  
  
  /**
   * Sets the value of the NumPools field.
   */
  public void setNumPools(typekey.SwimmingPools value);
  
  
  
}