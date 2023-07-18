package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundChunkWorkItem.eti;InboundChunkWorkItem.eix;InboundChunkWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundChunkWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.WorkItemInternal {
  /**
   * Gets the value of the InboundRecords field.
   * Reference to Inbound Records.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundChunk getInboundRecords();
  
  
  public gw.pl.persistence.core.Key getInboundRecordsID();
  
  
  /**
   * Sets the value of the InboundRecords field.
   */
  public void setInboundRecords(entity.InboundChunk value);
  
  
  public void setInboundRecordsID(gw.pl.persistence.core.Key value);
  
  
  
}