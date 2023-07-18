package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBlanket.eti;CPBlanket.eix;CPBlanket.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPBlanketInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter {
  /**
   * Adds the given element to the BuildingCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildingCoverages(entity.CPBuildingCov element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.CPBlanketCov element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBlanket getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BlanketGroupType field.
   * For Direct Loss or Time Element.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BlanketGroupType getBlanketGroupType();
  
  
  /**
   * Gets the value of the BlanketType field.
   * Identifies the combinations used in the blanket
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BlanketType getBlanketType();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the BuildingCoverages field.
   * Building coverages that apply directly to this blanket.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuildingCov[] getBuildingCoverages();
  
  
  /**
   * Gets the value of the CPBlanketDescription field.
   * Description of the blanket
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCPBlanketDescription();
  
  
  /**
   * Gets the value of the CPBlanketNum field.
   * The blanket number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCPBlanketNum();
  
  
  /**
   * Gets the value of the CPBuildingCovName field.
   * Name of the Building Coverage Pattern when BlanketType is single coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCPBuildingCovName();
  
  
  /**
   * Gets the value of the CPLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyLine getCPLine();
  
  
  public gw.pl.persistence.core.Key getCPLineID();
  
  
  /**
   * Gets the value of the CPLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPLocation getCPLocation();
  
  
  public gw.pl.persistence.core.Key getCPLocationID();
  
  
  /**
   * Gets the value of the Coverages field.
   * Blanket coverages that apply directly to this blanket.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBlanketCov[] getCoverages();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBlanket getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Removes the given element from the BuildingCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildingCoverages(entity.CPBuildingCov element);
  
  
  /**
   * Removes the given element from the BuildingCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildingCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.CPBlanketCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.CPBlanket value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BlanketGroupType field.
   */
  public void setBlanketGroupType(typekey.BlanketGroupType value);
  
  
  /**
   * Sets the value of the BlanketType field.
   */
  public void setBlanketType(typekey.BlanketType value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BuildingCoverages field.
   */
  public void setBuildingCoverages(entity.CPBuildingCov[] value);
  
  
  /**
   * Sets the value of the CPBlanketDescription field.
   */
  public void setCPBlanketDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the CPBlanketNum field.
   */
  public void setCPBlanketNum(java.lang.Integer value);
  
  
  /**
   * Sets the value of the CPBuildingCovName field.
   */
  public void setCPBuildingCovName(java.lang.String value);
  
  
  /**
   * Sets the value of the CPLine field.
   */
  public void setCPLine(entity.CommercialPropertyLine value);
  
  
  public void setCPLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CPLocation field.
   */
  public void setCPLocation(entity.CPLocation value);
  
  
  public void setCPLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.CPBlanketCov[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.CPBlanket value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  
}