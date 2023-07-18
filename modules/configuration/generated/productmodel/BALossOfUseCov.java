package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BALossOfUseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BALossOfUseCov extends entity.BAStateCov {
  protected BALossOfUseCov()  {
    super((java.lang.Void)null);
  }
  
  public BALossOfUseCov(entity.PolicyPeriod branch)  {
    super(branch, "BALossOfUseCov");
  }
  
  public BALossOfUseCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BALossOfUseCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BALossOfUseCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BALossOfUseCov>() {
      public productmodel.BALossOfUseCov newEmptyInstance() {
        return new productmodel.BALossOfUseCov();
      }
      
      
    });
  }
}