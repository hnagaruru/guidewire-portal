package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPPermittedIncidentalOccupanciesItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPPermittedIncidentalOccupanciesItem extends entity.HOPDwellSchCovItemCov {
  protected HOPPermittedIncidentalOccupanciesItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPPermittedIncidentalOccupanciesItem(entity.PolicyPeriod branch)  {
    super(branch, "zrrhqcqhj768sfnjh0uoas3n5d9");
  }
  
  public HOPPermittedIncidentalOccupanciesItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zrrhqcqhj768sfnjh0uoas3n5d9");
  }
  
  public productmodel.DirectHOPPermittedIncidentalOccupanciesItemLimitType getHOPPermittedIncidentalOccupanciesItemLimitTerm() {
    return (productmodel.DirectHOPPermittedIncidentalOccupanciesItemLimitType)getCovTerm("zsnh23eboma1o5drue4vhdhhkl9");
  }
  
  public boolean getHasHOPPermittedIncidentalOccupanciesItemLimitTerm() {
    return hasCovTerm("zsnh23eboma1o5drue4vhdhhkl9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPPermittedIncidentalOccupanciesItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPPermittedIncidentalOccupanciesItem>() {
      public productmodel.HOPPermittedIncidentalOccupanciesItem newEmptyInstance() {
        return new productmodel.HOPPermittedIncidentalOccupanciesItem();
      }
      
      
    });
  }
}