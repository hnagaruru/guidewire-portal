package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLocWindHailCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPLocWindHailCov extends entity.BOPLocationCov {
  protected BOPLocWindHailCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPLocWindHailCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPLocWindHailCov");
  }
  
  public BOPLocWindHailCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPLocWindHailCov");
  }
  
  public productmodel.OptionBOPWindHailDedType getBOPWindHailDedTerm() {
    return (productmodel.OptionBOPWindHailDedType)getCovTerm("BOPWindHailDed");
  }
  
  public productmodel.OptionBOPWindHailMoneyDedType getBOPWindHailMoneyDedTerm() {
    return (productmodel.OptionBOPWindHailMoneyDedType)getCovTerm("BOPWindHailMoneyDed");
  }
  
  public boolean getHasBOPWindHailDedTerm() {
    return hasCovTerm("BOPWindHailDed");
  }
  
  public boolean getHasBOPWindHailMoneyDedTerm() {
    return hasCovTerm("BOPWindHailMoneyDed");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPLocWindHailCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPLocWindHailCov>() {
      public productmodel.BOPLocWindHailCov newEmptyInstance() {
        return new productmodel.BOPLocWindHailCov();
      }
      
      
    });
  }
}