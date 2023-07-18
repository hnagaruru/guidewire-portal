package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSpecificStructsAwayFromResidence.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPSpecificStructsAwayFromResidenceSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> DescriptionValueProvider;
  
  public ScheduledItemHOPSpecificStructsAwayFromResidenceSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    DescriptionValueProvider  =  getClause().getPropertyInfosMap().get("HOPSpecificStructsAwayFromResidenceSchedDescLocation").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPSpecificStructsAwayFromResidence getClause() {
    return (productmodel.HOPSpecificStructsAwayFromResidence)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getDescription() {
    return DescriptionValueProvider.getValue();
  }
  
  public void setDescription(java.lang.String description) {
    DescriptionValueProvider.setValue(description);
  }
  
  
}