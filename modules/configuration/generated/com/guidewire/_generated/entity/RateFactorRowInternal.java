package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateFactorRow.eti;RateFactorRow.eix;RateFactorRow.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateFactorRowInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the RateTable field.
   * Logical rate table that contain the factors with these values
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable getRateTable();
  
  
  public gw.pl.persistence.core.Key getRateTableID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateFactorRow getSubtype();
  
  
  /**
   * Gets the value of the date1 field.
   * Date 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getdate1();
  
  
  /**
   * Gets the value of the date2 field.
   * Date 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getdate2();
  
  
  /**
   * Gets the value of the dec1 field.
   * Decimal 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec1();
  
  
  /**
   * Gets the value of the dec2 field.
   * Decimal 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec2();
  
  
  /**
   * Gets the value of the dec3 field.
   * Decimal 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec3();
  
  
  /**
   * Gets the value of the dec4 field.
   * Decimal 4
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec4();
  
  
  /**
   * Gets the value of the dec5 field.
   * Decimal 5
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec5();
  
  
  /**
   * Gets the value of the dec6 field.
   * Decimal 6
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec6();
  
  
  /**
   * Gets the value of the int1 field.
   * Integer 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint1();
  
  
  /**
   * Gets the value of the int2 field.
   * Integer 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint2();
  
  
  /**
   * Gets the value of the int3 field.
   * Integer 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint3();
  
  
  /**
   * Gets the value of the int4 field.
   * Integer 4
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint4();
  
  
  /**
   * Gets the value of the int5 field.
   * Integer 5
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint5();
  
  
  /**
   * Gets the value of the int6 field.
   * Integer 6
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint6();
  
  
  /**
   * Gets the value of the int7 field.
   * Integer 7
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint7();
  
  
  /**
   * Gets the value of the int8 field.
   * Integer 8
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint8();
  
  
  /**
   * Gets the value of the str1 field.
   * String 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr1();
  
  
  /**
   * Gets the value of the str2 field.
   * String 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr2();
  
  
  /**
   * Gets the value of the str3 field.
   * String 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr3();
  
  
  /**
   * Gets the value of the str4 field.
   * String 4
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr4();
  
  
  /**
   * Gets the value of the str5 field.
   * String 5
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr5();
  
  
  /**
   * Gets the value of the str6 field.
   * String 6
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr6();
  
  
  /**
   * Gets the value of the str7 field.
   * String 7
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr7();
  
  
  /**
   * Gets the value of the str8 field.
   * String 8
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr8();
  
  
  /**
   * Gets the value of the bit1 field.
   * Bit 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isbit1();
  
  
  /**
   * Gets the value of the bit2 field.
   * Bit 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isbit2();
  
  
  /**
   * Sets the value of the RateTable field.
   */
  public void setRateTable(entity.RateTable value);
  
  
  public void setRateTableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RateFactorRow value);
  
  
  /**
   * Sets the value of the bit1 field.
   */
  public void setbit1(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the bit2 field.
   */
  public void setbit2(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the date1 field.
   */
  public void setdate1(java.util.Date value);
  
  
  /**
   * Sets the value of the date2 field.
   */
  public void setdate2(java.util.Date value);
  
  
  /**
   * Sets the value of the dec1 field.
   */
  public void setdec1(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the dec2 field.
   */
  public void setdec2(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the dec3 field.
   */
  public void setdec3(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the dec4 field.
   */
  public void setdec4(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the dec5 field.
   */
  public void setdec5(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the dec6 field.
   */
  public void setdec6(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the int1 field.
   */
  public void setint1(java.lang.Integer value);
  
  
  /**
   * Sets the value of the int2 field.
   */
  public void setint2(java.lang.Integer value);
  
  
  /**
   * Sets the value of the int3 field.
   */
  public void setint3(java.lang.Integer value);
  
  
  /**
   * Sets the value of the int4 field.
   */
  public void setint4(java.lang.Integer value);
  
  
  /**
   * Sets the value of the int5 field.
   */
  public void setint5(java.lang.Integer value);
  
  
  /**
   * Sets the value of the int6 field.
   */
  public void setint6(java.lang.Integer value);
  
  
  /**
   * Sets the value of the int7 field.
   */
  public void setint7(java.lang.Integer value);
  
  
  /**
   * Sets the value of the int8 field.
   */
  public void setint8(java.lang.Integer value);
  
  
  /**
   * Sets the value of the str1 field.
   */
  public void setstr1(java.lang.String value);
  
  
  /**
   * Sets the value of the str2 field.
   */
  public void setstr2(java.lang.String value);
  
  
  /**
   * Sets the value of the str3 field.
   */
  public void setstr3(java.lang.String value);
  
  
  /**
   * Sets the value of the str4 field.
   */
  public void setstr4(java.lang.String value);
  
  
  /**
   * Sets the value of the str5 field.
   */
  public void setstr5(java.lang.String value);
  
  
  /**
   * Sets the value of the str6 field.
   */
  public void setstr6(java.lang.String value);
  
  
  /**
   * Sets the value of the str7 field.
   */
  public void setstr7(java.lang.String value);
  
  
  /**
   * Sets the value of the str8 field.
   */
  public void setstr8(java.lang.String value);
  
  
  
}