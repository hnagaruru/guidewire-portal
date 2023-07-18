package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageSymbolGroup.eti;CoverageSymbolGroup.eix;CoverageSymbolGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CoverageSymbolGroupInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.coverage.CoverageSymbolGroupPublicMethods, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the CoverageSymbols array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageSymbols(entity.CoverageSymbol element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CoverageSymbolGroup getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CoverageSymbols field.
   * The symbols belonging to this group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CoverageSymbol[] getCoverageSymbols();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CoverageSymbolGroup getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of CoverageSymbolGroup this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Gets the value of the PolicyLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine getPolicyLine();
  
  
  public gw.pl.persistence.core.Key getPolicyLineID();
  
  
  /**
   * Removes the given element from the CoverageSymbols array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageSymbols(entity.CoverageSymbol element);
  
  
  /**
   * Removes the given element from the CoverageSymbols array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageSymbols(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.CoverageSymbolGroup value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CoverageSymbols field.
   */
  public void setCoverageSymbols(entity.CoverageSymbol[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.CoverageSymbolGroup value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PatternCode field.
   */
  public void setPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyLine field.
   */
  public void setPolicyLine(entity.PolicyLine value);
  
  
  public void setPolicyLineID(gw.pl.persistence.core.Key value);
  
  
  
}