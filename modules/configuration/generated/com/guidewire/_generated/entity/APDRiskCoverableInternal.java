package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCoverable.eti;APDRiskCoverable.eix;APDRiskCoverable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskCoverableInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.domain.CoverableAdapter {
  /**
   * Adds the given element to the ApdriskcoverableparentArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToApdriskcoverableparentArray(entity.Apdriskcoverableparent element);
  
  
  /**
   * Adds the given element to the CostPricing array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostPricing(entity.APDRiskPricing element);
  
  
  /**
   * Adds the given element to the RiskClauses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskClauses(entity.APDRiskClause element);
  
  
  /**
   * Adds the given element to the RiskCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskCosts(entity.APDRiskCost element);
  
  
  /**
   * Adds the given element to the RiskExposures array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskExposures(entity.APDRiskExposure element);
  
  
  /**
   * Adds the given element to the RiskFields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskFields(entity.APDRiskField element);
  
  
  /**
   * Gets the value of the ApdriskcoverableparentArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Apdriskcoverableparent[] getApdriskcoverableparentArray();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getBasedOnValue();
  
  
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
   * The building this coverable is (when it is a building)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building getBuilding();
  
  
  public gw.pl.persistence.core.Key getBuildingID();
  
  
  /**
   * Gets the value of the ChildRiskObjectAutoNumberSeq field.
   * Sequence to autonumber child risk objects
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getChildRiskObjectAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getChildRiskObjectAutoNumberSeqID();
  
  
  /**
   * Gets the value of the CostPricing field.
   * Pricing for this coverable that are used to create costs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskPricing[] getCostPricing();
  
  
  /**
   * Gets the value of the Coverable field.
   * Definition of the coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getCoverable();
  
  
  public gw.pl.persistence.core.Key getCoverableID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Location field.
   * The location when this coverable is a location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the ManualPolicyLine field.
   * The policy line that this belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDManualPolicyLine getManualPolicyLine();
  
  
  public gw.pl.persistence.core.Key getManualPolicyLineID();
  
  
  /**
   * Gets the value of the Parent field.
   * The risk object that this is a part of
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getParent();
  
  
  public gw.pl.persistence.core.Key getParentID();
  
  
  /**
   * Gets the value of the RiskClauses field.
   * The cover required for this risk object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskClause[] getRiskClauses();
  
  
  /**
   * Gets the value of the RiskCosts field.
   * A cost that makes up the price of the risk
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCost[] getRiskCosts();
  
  
  /**
   * Gets the value of the RiskExposures field.
   * A list of things that expose this coverable to risk
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskExposure[] getRiskExposures();
  
  
  /**
   * Gets the value of the RiskFields field.
   * The fields describing this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskField[] getRiskFields();
  
  
  /**
   * Gets the value of the SequenceNumber field.
   * The index of this risk coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequenceNumber();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRiskCoverable getSubtype();
  
  
  /**
   * Gets the value of the ThirdPartyUnderwriter field.
   * The organisation that underwrites the coverable/line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getThirdPartyUnderwriter();
  
  
  public gw.pl.persistence.core.Key getThirdPartyUnderwriterID();
  
  
  /**
   * Removes the given element from the ApdriskcoverableparentArray array. This is achieved by marking the element for removal.
   */
  public void removeFromApdriskcoverableparentArray(entity.Apdriskcoverableparent element);
  
  
  /**
   * Removes the given element from the ApdriskcoverableparentArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromApdriskcoverableparentArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CostPricing array. This is achieved by marking the element for removal.
   */
  public void removeFromCostPricing(entity.APDRiskPricing element);
  
  
  /**
   * Removes the given element from the CostPricing array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostPricing(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RiskClauses array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskClauses(entity.APDRiskClause element);
  
  
  /**
   * Removes the given element from the RiskClauses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskClauses(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RiskCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskCosts(entity.APDRiskCost element);
  
  
  /**
   * Removes the given element from the RiskCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RiskExposures array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskExposures(entity.APDRiskExposure element);
  
  
  /**
   * Removes the given element from the RiskExposures array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskExposures(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RiskFields array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskFields(entity.APDRiskField element);
  
  
  /**
   * Removes the given element from the RiskFields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskFields(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ApdriskcoverableparentArray field.
   */
  public void setApdriskcoverableparentArray(entity.Apdriskcoverableparent[] value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDRiskCoverable value);
  
  
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
   * Sets the value of the ChildRiskObjectAutoNumberSeq field.
   */
  public void setChildRiskObjectAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setChildRiskObjectAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CostPricing field.
   */
  public void setCostPricing(entity.APDRiskPricing[] value);
  
  
  /**
   * Sets the value of the Coverable field.
   */
  public void setCoverable(entity.APDCoverable value);
  
  
  public void setCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDRiskCoverable value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ManualPolicyLine field.
   */
  public void setManualPolicyLine(entity.APDManualPolicyLine value);
  
  
  public void setManualPolicyLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Parent field.
   */
  public void setParent(entity.APDRiskCoverable value);
  
  
  public void setParentID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskClauses field.
   */
  public void setRiskClauses(entity.APDRiskClause[] value);
  
  
  /**
   * Sets the value of the RiskCosts field.
   */
  public void setRiskCosts(entity.APDRiskCost[] value);
  
  
  /**
   * Sets the value of the RiskExposures field.
   */
  public void setRiskExposures(entity.APDRiskExposure[] value);
  
  
  /**
   * Sets the value of the RiskFields field.
   */
  public void setRiskFields(entity.APDRiskField[] value);
  
  
  /**
   * Sets the value of the SequenceNumber field.
   */
  public void setSequenceNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDRiskCoverable value);
  
  
  /**
   * Sets the value of the ThirdPartyUnderwriter field.
   */
  public void setThirdPartyUnderwriter(entity.ProducerCode value);
  
  
  public void setThirdPartyUnderwriterID(gw.pl.persistence.core.Key value);
  
  
  
}