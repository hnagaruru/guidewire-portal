package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLRateFactorPattern.eti;ETLRateFactorPattern.eix;ETLRateFactorPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLRateFactorPatternInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier (human readable) of the source rate factor pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the ModifierPattern field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLModifierPattern getModifierPattern();
  
  
  public gw.pl.persistence.core.Key getModifierPatternID();
  
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source rate factor pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID();
  
  
  /**
   * Gets the value of the RateFactorType field.
   * The type of this Rate Factor Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRateFactorType();
  
  
  /**
   * Gets the value of the RefCode field.
   * The Ref Code of this Rate Factor Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRefCode();
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the ModifierPattern field.
   */
  public void setModifierPattern(entity.ETLModifierPattern value);
  
  
  public void setModifierPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value);
  
  
  /**
   * Sets the value of the RateFactorType field.
   */
  public void setRateFactorType(java.lang.String value);
  
  
  /**
   * Sets the value of the RefCode field.
   */
  public void setRefCode(java.lang.String value);
  
  
  
}