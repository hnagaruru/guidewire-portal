package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PALimitedMexicoCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PALimitedMexicoCov extends entity.PersonalAutoCov {
  protected PALimitedMexicoCov()  {
    super((java.lang.Void)null);
  }
  
  public PALimitedMexicoCov(entity.PolicyPeriod branch)  {
    super(branch, "PALimitedMexicoCov");
  }
  
  public PALimitedMexicoCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PALimitedMexicoCov");
  }
  
  static {
    com.guidewire._generated.productmodel.PALimitedMexicoCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PALimitedMexicoCov>() {
      public productmodel.PALimitedMexicoCov newEmptyInstance() {
        return new productmodel.PALimitedMexicoCov();
      }
      
      
    });
  }
}