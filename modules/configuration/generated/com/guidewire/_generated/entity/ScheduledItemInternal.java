package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ScheduledItem.eti;ScheduledItem.eix;ScheduledItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ScheduledItemInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.schedule.ScheduledItemPublicMethods, gw.api.productmodel.ScheduledItemAdapter {
  /**
   * Gets the value of the DateCol1 field.
   * Date Field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateCol1();
  
  
  /**
   * Gets the value of the IntCol1 field.
   * Integer field1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIntCol1();
  
  
  /**
   * Gets the value of the NamedInsured field.
   * NamedInsured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyNamedInsured getNamedInsured();
  
  
  public gw.pl.persistence.core.Key getNamedInsuredID();
  
  
  /**
   * Gets the value of the PolicyLocation field.
   * Policy Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPolicyLocation();
  
  
  public gw.pl.persistence.core.Key getPolicyLocationID();
  
  
  /**
   * Gets the value of the PosIntCol1 field.
   * Positive integer field1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPosIntCol1();
  
  
  /**
   * Gets the value of the ScheduleNumber field.
   * Schedule number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScheduleNumber();
  
  
  /**
   * Gets the value of the StringCol1 field.
   * String field1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol1();
  
  
  /**
   * Gets the value of the StringCol2 field.
   * String field2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol2();
  
  
  /**
   * Gets the value of the StringCol3 field.
   * String field3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol3();
  
  
  /**
   * Gets the value of the StringCol4 field.
   * String field4
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol4();
  
  
  /**
   * Gets the value of the TypeKeyCol1 field.
   * typekey column field1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeKeyCol1();
  
  
  /**
   * Gets the value of the TypeKeyCol2 field.
   * typekey column field2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeKeyCol2();
  
  
  /**
   * Gets the value of the BoolCol1 field.
   * Boolean Field1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBoolCol1();
  
  
  /**
   * Gets the value of the BoolCol2 field.
   * Boolean Field2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBoolCol2();
  
  
  /**
   * Sets the value of the BoolCol1 field.
   */
  public void setBoolCol1(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BoolCol2 field.
   */
  public void setBoolCol2(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateCol1 field.
   */
  public void setDateCol1(java.util.Date value);
  
  
  /**
   * Sets the value of the IntCol1 field.
   */
  public void setIntCol1(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NamedInsured field.
   */
  public void setNamedInsured(entity.PolicyNamedInsured value);
  
  
  public void setNamedInsuredID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLocation field.
   */
  public void setPolicyLocation(entity.PolicyLocation value);
  
  
  public void setPolicyLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PosIntCol1 field.
   */
  public void setPosIntCol1(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ScheduleNumber field.
   */
  public void setScheduleNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the StringCol1 field.
   */
  public void setStringCol1(java.lang.String value);
  
  
  /**
   * Sets the value of the StringCol2 field.
   */
  public void setStringCol2(java.lang.String value);
  
  
  /**
   * Sets the value of the StringCol3 field.
   */
  public void setStringCol3(java.lang.String value);
  
  
  /**
   * Sets the value of the StringCol4 field.
   */
  public void setStringCol4(java.lang.String value);
  
  
  /**
   * Sets the value of the TypeKeyCol1 field.
   */
  public void setTypeKeyCol1(java.lang.String value);
  
  
  /**
   * Sets the value of the TypeKeyCol2 field.
   */
  public void setTypeKeyCol2(java.lang.String value);
  
  
  
}