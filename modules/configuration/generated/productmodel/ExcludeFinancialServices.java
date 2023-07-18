package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeFinancialServices.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeFinancialServices extends entity.GeneralLiabilityExcl {
  protected ExcludeFinancialServices()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeFinancialServices(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeFinancialServices");
  }
  
  public ExcludeFinancialServices(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeFinancialServices");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeFinancialServicesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeFinancialServices>() {
      public productmodel.ExcludeFinancialServices newEmptyInstance() {
        return new productmodel.ExcludeFinancialServices();
      }
      
      
    });
  }
}