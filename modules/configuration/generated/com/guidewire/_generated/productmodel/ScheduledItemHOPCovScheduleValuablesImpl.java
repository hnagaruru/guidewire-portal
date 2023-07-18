package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPValuablePersonalProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPCovScheduleValuablesImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPCovScheduleValuables {
  public ScheduledItemHOPCovScheduleValuablesImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
  }
  
  public productmodel.HOPValuablePersonalProperty getClause() {
    return (productmodel.HOPValuablePersonalProperty)getScheduledItemEntity().getScheduleParent();
  }
  
  
}