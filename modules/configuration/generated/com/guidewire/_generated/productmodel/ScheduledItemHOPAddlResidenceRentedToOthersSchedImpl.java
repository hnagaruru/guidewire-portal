package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPAddlResidenceRentedToOthers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPAddlResidenceRentedToOthersSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> LocationValueProvider;
  
  public ScheduledItemHOPAddlResidenceRentedToOthersSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    LocationValueProvider  =  getClause().getPropertyInfosMap().get("HOPAddlResidenceRentedToOthersSchedLocation").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPAddlResidenceRentedToOthers getClause() {
    return (productmodel.HOPAddlResidenceRentedToOthers)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getLocation() {
    return LocationValueProvider.getValue();
  }
  
  public void setLocation(java.lang.String location) {
    LocationValueProvider.setValue(location);
  }
  
  
}