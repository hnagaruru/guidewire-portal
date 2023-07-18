package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDwellingUnderConstruction.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPDwellingUnderConstruction extends entity.HOPDwellingCov {
  protected HOPDwellingUnderConstruction()  {
    super((java.lang.Void)null);
  }
  
  public HOPDwellingUnderConstruction(entity.PolicyPeriod branch)  {
    super(branch, "zrjhog8dpqkb00hc4dtc7ljrukb");
  }
  
  public HOPDwellingUnderConstruction(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zrjhog8dpqkb00hc4dtc7ljrukb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPDwellingUnderConstructionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPDwellingUnderConstruction>() {
      public productmodel.HOPDwellingUnderConstruction newEmptyInstance() {
        return new productmodel.HOPDwellingUnderConstruction();
      }
      
      
    });
  }
}