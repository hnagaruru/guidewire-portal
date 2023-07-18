package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPStructuresRentedToOthersResidencePremises.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPStructsRentedToOthersSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPStructsRentedToOthersSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> DescriptionValueProvider;
  
  public ScheduledItemHOPStructsRentedToOthersSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    DescriptionValueProvider  =  getClause().getPropertyInfosMap().get("HOPStructsRentedToOthersSchedDescription").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPStructuresRentedToOthersResidencePremises getClause() {
    return (productmodel.HOPStructuresRentedToOthersResidencePremises)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getDescription() {
    return DescriptionValueProvider.getValue();
  }
  
  public void setDescription(java.lang.String description) {
    DescriptionValueProvider.setValue(description);
  }
  
  
}