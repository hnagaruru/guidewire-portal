package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskClause.eti;APDRiskClause.eix;APDRiskClause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskClauseInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Adds the given element to the RiskItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskItems(entity.APDRiskScheduleItem element);
  
  
  /**
   * Adds the given element to the RiskTerms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskTerms(entity.APDRiskTerm element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskClause getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Currency field.
   * The currency used by any terms (and the original currency of costs)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskClause getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the RiskCoverable field.
   * The risk object for which this coverage provides protection
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getRiskCoverable();
  
  
  public gw.pl.persistence.core.Key getRiskCoverableID();
  
  
  /**
   * Gets the value of the RiskItems field.
   * Items covered by/included in this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskScheduleItem[] getRiskItems();
  
  
  /**
   * Gets the value of the RiskTerms field.
   * The terms that qualify this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskTerm[] getRiskTerms();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRiskClause getSubtype();
  
  
  /**
   * Removes the given element from the RiskItems array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskItems(entity.APDRiskScheduleItem element);
  
  
  /**
   * Removes the given element from the RiskItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RiskTerms array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskTerms(entity.APDRiskTerm element);
  
  
  /**
   * Removes the given element from the RiskTerms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskTerms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDRiskClause value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDRiskClause value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskCoverable field.
   */
  public void setRiskCoverable(entity.APDRiskCoverable value);
  
  
  public void setRiskCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskItems field.
   */
  public void setRiskItems(entity.APDRiskScheduleItem[] value);
  
  
  /**
   * Sets the value of the RiskTerms field.
   */
  public void setRiskTerms(entity.APDRiskTerm[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDRiskClause value);
  
  
  
}