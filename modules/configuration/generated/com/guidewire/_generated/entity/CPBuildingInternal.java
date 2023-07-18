package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuilding.eti;CPBuilding.eix;CPBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPBuildingInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.contact.AdditionalInterestContainer, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificBuilding {
  /**
   * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterests(entity.CPBldgAddlInterest element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.CPBuildingCov element);
  
  
  /**
   * Gets the value of the AdditionalInterests field.
   * Additional interests on this building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBldgAddlInterest[] getAdditionalInterests();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuilding getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
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
   * Gets the value of the CPLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPLocation getCPLocation();
  
  
  public gw.pl.persistence.core.Key getCPLocationID();
  
  
  /**
   * Gets the value of the ClassCode field.
   * Class code of building.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPClassCode getClassCode();
  
  
  public gw.pl.persistence.core.Key getClassCodeID();
  
  
  /**
   * Gets the value of the CoverageForm field.
   * Defines the set of coverages that are available; also known as coverage parts.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoverageForm getCoverageForm();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this building.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuildingCov[] getCoverages();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuilding getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the RateType field.
   * Rate using a table or specific value.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateType getRateType();
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterests(entity.CPBldgAddlInterest element);
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.CPBuildingCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInterests field.
   */
  public void setAdditionalInterests(entity.CPBldgAddlInterest[] value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.CPBuilding value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
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
   * Sets the value of the CPLocation field.
   */
  public void setCPLocation(entity.CPLocation value);
  
  
  public void setCPLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ClassCode field.
   */
  public void setClassCode(entity.CPClassCode value);
  
  
  public void setClassCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CoverageForm field.
   */
  public void setCoverageForm(typekey.CoverageForm value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.CPBuildingCov[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.CPBuilding value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RateType field.
   */
  public void setRateType(typekey.RateType value);
  
  
  
}