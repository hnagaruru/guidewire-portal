package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLCovTermOpt.eti;ETLCovTermOpt.eix;ETLCovTermOpt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLCovTermOptInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier (human readable) of the source coverage term option in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the CoverageTermPattern field.
   * the foreign key to the Coverage Term Pattern for this option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLOptionCovTermPattern getCoverageTermPattern();
  
  
  public gw.pl.persistence.core.Key getCoverageTermPatternID();
  
  
  /**
   * Gets the value of the Currency field.
   * Currency of the option covterm option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCurrency();
  
  
  /**
   * Gets the value of the OptionCode field.
   * The option code for this option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOptionCode();
  
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source coverage term option in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ETLCovTermOpt getSubtype();
  
  
  /**
   * Gets the value of the Value field.
   * The value for this Option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getValue();
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverageTermPattern field.
   */
  public void setCoverageTermPattern(entity.ETLOptionCovTermPattern value);
  
  
  public void setCoverageTermPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(java.lang.String value);
  
  
  /**
   * Sets the value of the OptionCode field.
   */
  public void setOptionCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ETLCovTermOpt value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  
}