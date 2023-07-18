package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPWaiveSubroCond.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPWaiveSubroCond extends entity.BusinessOwnersCond {
  protected BOPWaiveSubroCond()  {
    super((java.lang.Void)null);
  }
  
  public BOPWaiveSubroCond(entity.PolicyPeriod branch)  {
    super(branch, "BOPWaiveSubroCond");
  }
  
  public BOPWaiveSubroCond(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPWaiveSubroCond");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPWaiveSubroCondInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPWaiveSubroCond>() {
      public productmodel.BOPWaiveSubroCond newEmptyInstance() {
        return new productmodel.BOPWaiveSubroCond();
      }
      
      
    });
  }
}