package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPWaiveInsurToValue.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPWaiveInsurToValue extends entity.BusinessOwnersCond {
  protected BOPWaiveInsurToValue()  {
    super((java.lang.Void)null);
  }
  
  public BOPWaiveInsurToValue(entity.PolicyPeriod branch)  {
    super(branch, "BOPWaiveInsurToValue");
  }
  
  public BOPWaiveInsurToValue(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPWaiveInsurToValue");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPWaiveInsurToValueInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPWaiveInsurToValue>() {
      public productmodel.BOPWaiveInsurToValue newEmptyInstance() {
        return new productmodel.BOPWaiveInsurToValue();
      }
      
      
    });
  }
}