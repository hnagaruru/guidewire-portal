package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIncLimitOtherStructures.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPIncLimitOtherStructuresSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPIncLimitOtherStructuresSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> DescriptionValueProvider;
  
  public ScheduledItemHOPIncLimitOtherStructuresSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    DescriptionValueProvider  =  getClause().getPropertyInfosMap().get("HOPIncLimitOtherStructuresSchedDescription").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPIncLimitOtherStructures getClause() {
    return (productmodel.HOPIncLimitOtherStructures)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getDescription() {
    return DescriptionValueProvider.getValue();
  }
  
  public void setDescription(java.lang.String description) {
    DescriptionValueProvider.setValue(description);
  }
  
  
}