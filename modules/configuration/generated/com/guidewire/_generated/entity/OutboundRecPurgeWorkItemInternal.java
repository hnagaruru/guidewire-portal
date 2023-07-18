package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundRecPurgeWorkItem.eti;OutboundRecPurgeWorkItem.eix;OutboundRecPurgeWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundRecPurgeWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.WorkItemInternal {
  /**
   * Gets the value of the OutboundRecord field.
   * Reference to Outbound Record
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundRecord getOutboundRecord();
  
  
  public gw.pl.persistence.core.Key getOutboundRecordID();
  
  
  /**
   * Sets the value of the OutboundRecord field.
   */
  public void setOutboundRecord(entity.OutboundRecord value);
  
  
  public void setOutboundRecordID(gw.pl.persistence.core.Key value);
  
  
  
}