package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePart.eti;HOPCoveragePart.eix;HOPCoveragePart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPCoveragePartInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.HOPCoveragePartCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.HOPCoveragePartCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.HOPCoveragePartExcl element);
  
  
  /**
   * Adds the given element to the HOPCoveragePartMods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPCoveragePartMods(entity.HOPCoveragePartMod element);
  
  
  /**
   * Adds the given element to the HOPDwellings array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellings(entity.HOPDwelling element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePart getBasedOnValue();
  
  
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
   * Conditions directly attached to the HOPCoveragePart
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePartCond[] getConditions();
  
  
  /**
   * Gets the value of the CoveragePartType field.
   * The type of this coverage part (Rental, Condominium, Dwelling)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoveragePartType getCoveragePartType();
  
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the HOPCoveragePart
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePartCov[] getCoverages();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Exclusions directly attached to the HOPCoveragePart
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePartExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePart getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPCoveragePartMods field.
   * Modifiers directly attached to the HOPCoveragePart
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePartMod[] getHOPCoveragePartMods();
  
  
  /**
   * Gets the value of the HOPDwellings field.
   * Dwellings for this Coverage Part
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling[] getHOPDwellings();
  
  
  /**
   * Gets the value of the HOPLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLine getHOPLine();
  
  
  public gw.pl.persistence.core.Key getHOPLineID();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.HOPCoveragePartCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.HOPCoveragePartCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.HOPCoveragePartExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPCoveragePartMods array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPCoveragePartMods(entity.HOPCoveragePartMod element);
  
  
  /**
   * Removes the given element from the HOPCoveragePartMods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPCoveragePartMods(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPDwellings array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellings(entity.HOPDwelling element);
  
  
  /**
   * Removes the given element from the HOPDwellings array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellings(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPCoveragePart value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.HOPCoveragePartCond[] value);
  
  
  /**
   * Sets the value of the CoveragePartType field.
   */
  public void setCoveragePartType(typekey.CoveragePartType value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.HOPCoveragePartCov[] value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.HOPCoveragePartExcl[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPCoveragePart value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPCoveragePartMods field.
   */
  public void setHOPCoveragePartMods(entity.HOPCoveragePartMod[] value);
  
  
  /**
   * Sets the value of the HOPDwellings field.
   */
  public void setHOPDwellings(entity.HOPDwelling[] value);
  
  
  /**
   * Sets the value of the HOPLine field.
   */
  public void setHOPLine(entity.HOPLine value);
  
  
  public void setHOPLineID(gw.pl.persistence.core.Key value);
  
  
  
}