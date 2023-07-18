package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledLandlordsFurnishing.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPScheduledLandlordsFurnishingSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> RentalUnitDescriptionValueProvider;
  
  public ScheduledItemHOPScheduledLandlordsFurnishingSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    RentalUnitDescriptionValueProvider  =  getClause().getPropertyInfosMap().get("HOPScheduledLandlordsFurnishingSchedRentalUnitDescription").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPScheduledLandlordsFurnishing getClause() {
    return (productmodel.HOPScheduledLandlordsFurnishing)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getRentalUnitDescription() {
    return RentalUnitDescriptionValueProvider.getValue();
  }
  
  public void setRentalUnitDescription(java.lang.String rentalUnitDescription) {
    RentalUnitDescriptionValueProvider.setValue(rentalUnitDescription);
  }
  
  
}