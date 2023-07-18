package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludePollutionAbsolute.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludePollutionAbsolute extends entity.GeneralLiabilityExcl {
  protected ExcludePollutionAbsolute()  {
    super((java.lang.Void)null);
  }
  
  public ExcludePollutionAbsolute(entity.PolicyPeriod branch)  {
    super(branch, "ExcludePollutionAbsolute");
  }
  
  public ExcludePollutionAbsolute(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludePollutionAbsolute");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludePollutionAbsoluteInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludePollutionAbsolute>() {
      public productmodel.ExcludePollutionAbsolute newEmptyInstance() {
        return new productmodel.ExcludePollutionAbsolute();
      }
      
      
    });
  }
}