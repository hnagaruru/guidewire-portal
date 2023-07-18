package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPOtherMembersOfHousehold.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPOtherMembersOfHouseholdSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPOtherMembersOfHouseholdSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> NameOfPersonValueProvider;
  
  public ScheduledItemHOPOtherMembersOfHouseholdSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    NameOfPersonValueProvider  =  getClause().getPropertyInfosMap().get("HOPOtherMembersOfHouseholdSchedNameOfPerson").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPOtherMembersOfHousehold getClause() {
    return (productmodel.HOPOtherMembersOfHousehold)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getNameOfPerson() {
    return NameOfPersonValueProvider.getValue();
  }
  
  public void setNameOfPerson(java.lang.String nameOfPerson) {
    NameOfPersonValueProvider.setValue(nameOfPerson);
  }
  
  
}