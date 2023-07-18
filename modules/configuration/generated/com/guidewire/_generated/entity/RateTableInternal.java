package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTable.eti;RateTable.eix;RateTable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateTableInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.rating.RateTablePublicMethods {
  /**
   * Adds the given element to the RtownershipArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRtownershipArray(entity.Rtownership element);
  
  
  /**
   * Adds the given element to the RtrefownershipArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRtrefownershipArray(entity.Rtrefownership element);
  
  
  /**
   * Gets the value of the BasedOnTable field.
   * Defines ownership of the factors in this table. Null value indicate tha factors are owned by the table.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable getBasedOnTable();
  
  
  public gw.pl.persistence.core.Key getBasedOnTableID();
  
  
  /**
   * Gets the value of the Checksum field.
   * Checksum for all parameters and factors associated with this rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChecksum();
  
  
  /**
   * Gets the value of the Definition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition getDefinition();
  
  
  public gw.pl.persistence.core.Key getDefinitionID();
  
  
  /**
   * Gets the value of the LastTableRowEdit field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastTableRowEdit();
  
  
  /**
   * Gets the value of the NormalizedRowCount field.
   * An estimated total number of rows that would be created if the table uses range normalization
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNormalizedRowCount();
  
  
  /**
   * Gets the value of the QueryStrategy field.
   * Define the factor query strategy for this table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FactorQueryStrategy getQueryStrategy();
  
  
  /**
   * Gets the value of the RateBook field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook();
  
  
  public gw.pl.persistence.core.Key getRateBookID();
  
  
  /**
   * Gets the value of the RefTable field.
   * Defines ownership of the factors in this table. Null value indicate tha factors are owned by the table.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable getRefTable();
  
  
  public gw.pl.persistence.core.Key getRefTableID();
  
  
  /**
   * Gets the value of the RowUniformityStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RowUniformityStatus getRowUniformityStatus();
  
  
  /**
   * Gets the value of the RtownershipArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Rtownership[] getRtownershipArray();
  
  
  /**
   * Gets the value of the RtrefownershipArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Rtrefownership[] getRtrefownershipArray();
  
  
  /**
   * Gets the value of the ReduceMemoryUsage field.
   * Signifies that the user set this table to not auto normalize
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isReduceMemoryUsage();
  
  
  /**
   * Removes the given element from the RtownershipArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRtownershipArray(entity.Rtownership element);
  
  
  /**
   * Removes the given element from the RtownershipArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRtownershipArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RtrefownershipArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRtrefownershipArray(entity.Rtrefownership element);
  
  
  /**
   * Removes the given element from the RtrefownershipArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRtrefownershipArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnTable field.
   */
  public void setBasedOnTable(entity.RateTable value);
  
  
  public void setBasedOnTableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Checksum field.
   */
  public void setChecksum(java.lang.String value);
  
  
  /**
   * Sets the value of the Definition field.
   */
  public void setDefinition(entity.RateTableDefinition value);
  
  
  public void setDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastTableRowEdit field.
   */
  public void setLastTableRowEdit(java.util.Date value);
  
  
  /**
   * Sets the value of the NormalizedRowCount field.
   */
  public void setNormalizedRowCount(java.lang.Integer value);
  
  
  /**
   * Sets the value of the QueryStrategy field.
   */
  public void setQueryStrategy(typekey.FactorQueryStrategy value);
  
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value);
  
  
  public void setRateBookID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ReduceMemoryUsage field.
   */
  public void setReduceMemoryUsage(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the RefTable field.
   */
  public void setRefTable(entity.RateTable value);
  
  
  public void setRefTableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RowUniformityStatus field.
   */
  public void setRowUniformityStatus(typekey.RowUniformityStatus value);
  
  
  /**
   * Sets the value of the RtownershipArray field.
   */
  public void setRtownershipArray(entity.Rtownership[] value);
  
  
  /**
   * Sets the value of the RtrefownershipArray field.
   */
  public void setRtrefownershipArray(entity.Rtrefownership[] value);
  
  
  
}