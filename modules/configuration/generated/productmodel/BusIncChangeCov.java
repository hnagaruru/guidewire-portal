package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BusIncChangeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BusIncChangeCov extends entity.BusinessOwnersCov {
  protected BusIncChangeCov()  {
    super((java.lang.Void)null);
  }
  
  public BusIncChangeCov(entity.PolicyPeriod branch)  {
    super(branch, "BusIncChangeCov");
  }
  
  public BusIncChangeCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BusIncChangeCov");
  }
  
  public productmodel.OptionBusIncWaitingPeriodType getBusIncWaitingPeriodTerm() {
    return (productmodel.OptionBusIncWaitingPeriodType)getCovTerm("BusIncWaitingPeriod");
  }
  
  public boolean getHasBusIncWaitingPeriodTerm() {
    return hasCovTerm("BusIncWaitingPeriod");
  }
  
  static {
    com.guidewire._generated.productmodel.BusIncChangeCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BusIncChangeCov>() {
      public productmodel.BusIncChangeCov newEmptyInstance() {
        return new productmodel.BusIncChangeCov();
      }
      
      
    });
  }
}