package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLCoverageTermPattern.eti;ETLCoverageTermPattern.eix;ETLCoverageTermPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLCoverageTermPatternInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the ClausePattern field.
   * the foreign key to the Clause Pattern for this option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLClausePattern getClausePattern();
  
  
  public gw.pl.persistence.core.Key getClausePatternID();
  
  
  /**
   * Gets the value of the Code field.
   * The Code for the Coverage Term Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier (human readable) of the source coverage term pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the ColumnName field.
   * The column 'Coverage' table that is populated with the Coverage Term Pattern PublicID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnName();
  
  
  /**
   * Gets the value of the CovTermType field.
   * The type of the covTerm
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermType();
  
  
  /**
   * Gets the value of the ModelType field.
   * The Model Type for the pattern. Should Correspond to the ModelType typelist
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModelType();
  
  
  /**
   * Gets the value of the Name field.
   * The Name for the Coverage Term Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source coverage term pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ETLCoverageTermPattern getSubtype();
  
  
  /**
   * Sets the value of the ClausePattern field.
   */
  public void setClausePattern(entity.ETLClausePattern value);
  
  
  public void setClausePatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the ColumnName field.
   */
  public void setColumnName(java.lang.String value);
  
  
  /**
   * Sets the value of the CovTermType field.
   */
  public void setCovTermType(java.lang.String value);
  
  
  /**
   * Sets the value of the ModelType field.
   */
  public void setModelType(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ETLCoverageTermPattern value);
  
  
  
}