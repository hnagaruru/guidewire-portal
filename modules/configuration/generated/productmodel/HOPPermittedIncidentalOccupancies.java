package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPPermittedIncidentalOccupancies.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPPermittedIncidentalOccupancies extends entity.HOPDwellingScheduleCov {
  protected HOPPermittedIncidentalOccupancies()  {
    super((java.lang.Void)null);
  }
  
  public HOPPermittedIncidentalOccupancies(entity.PolicyPeriod branch)  {
    super(branch, "zntgc6mmauu3hagr0g8ura77549");
  }
  
  public HOPPermittedIncidentalOccupancies(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zntgc6mmauu3hagr0g8ura77549");
  }
  
  public productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSched createAndAddScheduledItemHOPPermittedIncidentalOccupanciesSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSchedImpl(scheduledItemEntity);
  }
  
  public productmodel.GenericHOPPermittedIncidentalOccupanciesDescOfBusinessType getHOPPermittedIncidentalOccupanciesDescOfBusinessTerm() {
    return (productmodel.GenericHOPPermittedIncidentalOccupanciesDescOfBusinessType)getCovTerm("znsi8h8pr0d28a6gb8e3psodidb");
  }
  
  public productmodel.GenericHOPPermittedIncidentalOccupanciesInResidenceType getHOPPermittedIncidentalOccupanciesInResidenceTerm() {
    return (productmodel.GenericHOPPermittedIncidentalOccupanciesInResidenceType)getCovTerm("z3ijkag98i052btcjqef390hkg9");
  }
  
  public boolean getHasHOPPermittedIncidentalOccupanciesDescOfBusinessTerm() {
    return hasCovTerm("znsi8h8pr0d28a6gb8e3psodidb");
  }
  
  public boolean getHasHOPPermittedIncidentalOccupanciesInResidenceTerm() {
    return hasCovTerm("z3ijkag98i052btcjqef390hkg9");
  }
  
  public java.util.List<productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSched> getScheduledItemHOPPermittedIncidentalOccupanciesSchedList() {
    java.util.List<productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPPermittedIncidentalOccupanciesSched(productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPPermittedIncidentalOccupanciesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPPermittedIncidentalOccupancies>() {
      public productmodel.HOPPermittedIncidentalOccupancies newEmptyInstance() {
        return new productmodel.HOPPermittedIncidentalOccupancies();
      }
      
      
    });
  }
}