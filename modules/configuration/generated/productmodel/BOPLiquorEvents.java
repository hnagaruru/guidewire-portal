package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiquorEvents.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPLiquorEvents extends entity.BusinessOwnersCov {
  protected BOPLiquorEvents()  {
    super((java.lang.Void)null);
  }
  
  public BOPLiquorEvents(entity.PolicyPeriod branch)  {
    super(branch, "BOPLiquorEvents");
  }
  
  public BOPLiquorEvents(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPLiquorEvents");
  }
  
  public boolean getHasLiqLiabEventDateTerm() {
    return hasCovTerm("LiqLiabEventDate");
  }
  
  public boolean getHasLiqLiabEventsDescriptionTerm() {
    return hasCovTerm("LiqLiabEventsDescription");
  }
  
  public productmodel.GenericLiqLiabEventDateType getLiqLiabEventDateTerm() {
    return (productmodel.GenericLiqLiabEventDateType)getCovTerm("LiqLiabEventDate");
  }
  
  public productmodel.GenericLiqLiabEventsDescriptionType getLiqLiabEventsDescriptionTerm() {
    return (productmodel.GenericLiqLiabEventsDescriptionType)getCovTerm("LiqLiabEventsDescription");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPLiquorEventsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPLiquorEvents>() {
      public productmodel.BOPLiquorEvents newEmptyInstance() {
        return new productmodel.BOPLiquorEvents();
      }
      
      
    });
  }
}